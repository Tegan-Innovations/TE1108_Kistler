# TE1108_Kistler

Industrial automation project for the TE1108 pharmaceutical production machine. The solution is built on Beckhoff TwinCAT and includes custom HMI functionality for user management, reporting, and data visualization.

## Overview

- `TE1108_Kistler` is a TwinCAT solution containing both HMI and PLC components.
- The HMI application is located in `Hmi_kistler/`.
- The PLC application is located in `TE1108/`.
- Custom JavaScript for the HMI is stored in `Hmi_kistler/Contents/CSS_JAVA`.

## Main Structure

- `Hmi_kistler/` - HMI project with screens, properties, themes, localization, and custom scripts.
- `TE1108/` - PLC project with tasks, POUs, VISUs, and libraries.
- `Packages/` - TwinCAT packages used by the project.
- `_Boot/` - generated TwinCAT runtime and configuration files.

## Custom Features

The main custom HMI features are:

- `Hmi_kistler/Contents/CSS_JAVA/UserManagerControl/userManagerScript 1.js`
  - Create, remove, and update users.
  - Manage groups and passwords via `TcHmi.Server.UserManagement`.
- `Hmi_kistler/Contents/CSS_JAVA/RowClassesProvider.js`
  - Provides CSS classes for event table rows based on status and result fields.
- `Hmi_kistler/Contents/CSS_JAVA/PDF Maker/relatori.js`
  - Generates event PDF reports using `jspdf`.
- `Hmi_kistler/Contents/CSS_JAVA/Enable buttons.js`
  - Controls enable state for user creation buttons.

## Branching

- The main branch is `main`.
- Use `develop` for ongoing development.
- Branch `develop` has been created and pushed to the remote repository.

## How to Contribute

1. Switch to `develop`:
   ```bash
   git checkout develop
   ```
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Stage and commit your changes:
   ```bash
   git add .
   git commit -m "Add a short description of the changes"
   ```
4. Push the branch to the remote:
   ```bash
   git push origin feature/your-feature-name
   ```

## Notes

- Directories such as `Packages/`, `_Boot/`, and `Hmi_kistler/` contain TwinCAT dependencies and generated artifacts.
- Keep the HMI and PLC projects aligned on the same project version.
