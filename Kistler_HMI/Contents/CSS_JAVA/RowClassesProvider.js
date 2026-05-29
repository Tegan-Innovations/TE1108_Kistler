// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.762.46/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function RowClassesProvider(RowData, RowIndex, RowNumber) {
                var cssStyles = []; // Collected CSS styles which will be returned at the end

                    
                if (RowData.sType == 1) {
                    cssStyles.push("Alarm");
                }
                if (RowData.sType == 2) {
                    cssStyles.push("Alarm");
                }
                if (RowData.sType == 3) {
                    cssStyles.push("Alert");
                }
                if (RowData.sType == 4) {
                    cssStyles.push("Message");
                }

                return cssStyles;
            }
            TcHmiProject1.RowClassesProvider = RowClassesProvider;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('RowClassesProvider', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.RowClassesProvider);
