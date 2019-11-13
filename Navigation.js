import React, { } from 'react';





function Navigation() {
    return (
        <React.Fragment>
            <StatusBar
                barStyle="dark-content"
                // dark-content, light-content and default
                hidden={false}
                //To hide statusBar
                backgroundColor="#41b7b4"
                //Background color of statusBar
                translucent={false}
                //allowing light, but not detailed shapes
                networkActivityIndicatorVisible={true}
            />
            <ApplicationProvider mapping={mapping} theme={theme}>
                <App />
            </ApplicationProvider>
        </React.Fragment>
    )
}


export default Navigation;