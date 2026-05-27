// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.431/runtimes/native1.12-tchmi/TcHmi.d.ts" />
//sysManag.js



async function userManager(User, Password, Group, slctUser, Action){
    try{
        const userData = User;
        const passwordData = Password;
        const groupData = Group;
        const act = Action;
        const oldUser = slctUser;
        var   groupName = '';
        var   LogOutTime = "";  

        if(groupData == '1'){
	        groupName = 'Administrator';
            LogOutTime = "PT15M";
        }
        if(groupData == '2'){
	        groupName = 'Engineer';
            LogOutTime = "PT15M";
        }
        if(groupData == '3'){
	        groupName = 'Operator';
            LogOutTime = "P30D";
        }

        // 2. Input validation for creating or renaming users (prevents empty submissions)
        if (act == 'addUser' || act == 'changeName') {
            if (!userData || !passwordData || !groupName) {
                alert("Validation Warning: Please fill in all required text fields and select a valid group.");
                return; 
            }
        }

// 3. Bulletproof Native Username Duplication Check
        if (act == 'addUser') {
            // Query the core internal TwinCAT HMI Server user registry database directly
            const listRes = await TcHmi.Symbol.readEx2('%s%TcHmi.Server.UserManagement.getUsers%/s%');
            
            // Fail-safe protection: If server is initializing or disconnected, abort to prevent accidental overwrites
            if (listRes.error !== TcHmi.Errors.NONE || !listRes.value) {
                alert("System Warning: Unable to safely verify existing users from the TwinCAT Server registry. Action aborted to protect database integrity. Code: " + listRes.error);
                return; 
            }

            const masterUserRegistry = listRes.value;
            let userExists = false;

            // TwinCAT Server natively returns an object dictionary where the keys are the usernames (e.g., {"Administrator": {}, "Guest": {}})
            if (typeof masterUserRegistry === 'object' && masterUserRegistry !== null) {
                userExists = Object.keys(masterUserRegistry).some(existingUser => 
                    existingUser.trim().toLowerCase() === userData.trim().toLowerCase()
                );
            }

            // If a duplicate registry match is found, immediately halt execution and trigger error popup
            if (userExists) {
                alert("Validation Error: The username '" + userData + "' already exists in the system registry! Overwrite rejected.");
                return; 
            }
        }


        // Section dadicated for the Actions that the button in HMI will call

        if(act == 'addUser'){
            TcHmi.Server.UserManagement.addUserEx(
                User, 
                Password, 
                {groups: [groupName], enabled: true, locale: 'de', autoLogout: LogOutTime },
                {timeout: 2000},
                function(data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        alert('User created successfully.');
                    } else {
                        alert("Server Error: Failed to add the new user. Code: " + data.error);
                    }
                }
            );
            console.log(act);
        }
        if(act == 'removeUser'){
            TcHmi.Server.UserManagement.removeUserEx (
                User, 
                null,
                {timeout: 2000},
                function(data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        alert.log('User removed successfully.');
                    } else {
                        alert("Server Error: Failed to remove the selected user. Code: " + data.error);
                    }
                }
            );
        }
        if(act == 'changeName'){
            TcHmi.Server.UserManagement.updateUser(
                oldUser, 
                {
                newName: User
                },
                function(data) {
                    if (delData.error === TcHmi.Errors.NONE) {
                        alert.log('User renamed successfully.');
                    } else {
                        lert("Server Critical Error: New identity established, but the legacy account couldn't be purged. Code: " + delData.error);
                    }
                }
            );
        }
        if(act == 'addGroup'){
            TcHmi.Server.UserManagement.updateUser(
                oldUser, 
                {
                addGroups: [groupName]
                },
                function(data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        alert.log('Group association added.'); 
                    } else {
                        alert("Server Error: Failed to attach group to user profile. Code: " + data.error);
                    }
                }
            );
        }
        if(act == 'removeGroup'){
            TcHmi.Server.UserManagement.updateUser(
                oldUser, 
                {
                removeGroups: [groupName]
                },
                function(data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        alert.log('Group association removed.'); 
                    } else {
                        alert("Server Error: Failed to detach group from user profile. Code: " + data.error);
                    }
                }
            );
        }
        if(act == 'changePassword'){
            TcHmi.Server.UserManagement.updateUser(
                oldUser, 
                {
                password: passwordData
                },
                function(data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        alert.log('Credentials updated.'); 
                    } else {
                        alert("Server Error: Password update rejected by server. Code: " + data.error);
                    }
                }
            );
        }

        console.log(userData);
        console.log(passwordData);
        console.log(groupData);

    } catch (erro){
        alert("Fatal Application Exception: " + erro.message);
    }
};
