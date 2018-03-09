exports.npm = {
    globals: {
        Inferno: 'inferno'
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
