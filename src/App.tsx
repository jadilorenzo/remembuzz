import React from 'react'

const App = () => {
    // const context = useContext(AppContext)    
    return (
        <div>
            {false ? (
                <div>Loading...</div>
            ) : (
                <div>
                    Home
                </div>
            )}
        </div>
    )
}

export default App
