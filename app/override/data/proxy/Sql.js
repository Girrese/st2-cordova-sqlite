Ext.define('MyApp.override.data.proxy.Sql', {
    override: 'Ext.data.proxy.Sql',
    
    
    getDatabaseObject: function() {
        return window.sqlitePlugin.openDatabase({name: "myDB"});
    }
    
});
