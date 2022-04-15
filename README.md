## SKETCH VIEWER

### SETUP

- **clone repo**: Open a new terminal and execute _git clone https://github.com/jdmiguel/sketch-viewer.git_
- **install dependencies**: Execute _yarn_
- **run local server**: Execute _yarn start_
- **create production files**: Execute _yarn build_
- **run test suites**: Execute _yarn test_

### TECHNOLOGIES

- **CREATE-REACT-APP**
- **YARN**
- **REACT**
- **REACT-ROUTER**
- **TYPESCRIPT**
- **STYLED-COMPONENTS**
- **JEST**
- **REACT-TESTING-LIBRARY**

### DEVELOPMENT

The setup of the application includes several tools (such as eslint, prettier, husky and lintstaged) widely used in professional application setups.

This app is mainly developed with React and Typescript. Styled Components are used for styling.

The source files are in the _src folder_ that is composed of the following folders:

- **assets**: Images used in the app
- **components**: All the components organized by the following folders:
  - **ui**: Core components that are reused across the application
  - **layout**: Presentational components with the views of the app
  - **pages**: Container components related to the pages of the app
- **contexts**: React contexts to avoid prop drilling issues
- **helpers**: Several utilities such as types, test utils, and theme settings

### BONUS

- **testing**: Unit and integration tests with Jest and React Testing Library
- **routing system**: Router navigation from the root to the document page by using the id of the given documents. Code splitting has been implemented to
  allow the user download the app incrementally
- **theme mode**: Switchable theme mode (light and dark theme)
