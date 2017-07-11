if(Meteor.isServer) {
  Oracle.setDefaultOracleOptions(
    {connection: {
    	user: "meteor",
    	password: "meteor",
    	connectString: "192.168.99.100:1521/xe"
    	}
    });
}
