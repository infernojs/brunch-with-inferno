exports.npm = {
    globals: {
        Inferno: 'inferno',
        Component: 'inferno-component'
    }
}

exports.files = {
    javascripts: {
        entryPoints: {
            'app/initialize.js': 'app.js'
        }
    },
    stylesheets: {
        joinTo: 'app.css'
    }
}

exports.modules = {
    autoRequire: {
        'app.js': ['initialize']
    }
}
