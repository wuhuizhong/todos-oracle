# todos-oracle

参考: https://github.com/metstrike/meteor-oracle

Step 1: Install or get access to Oracle Database

Step 2: Install Oracle Instant Client

Step 3: Create a meteor account in your oracle database.
```
$ sqlplus system/practice@192.168.99.100/xe
create user meteor identified by meteor;
grant connect, resource to meteor;
grant unlimited tablespace to meteor;
```

Step 4: Add meteor-oracle package to your meteor project
```
$ cd ~/Documents/GitHub/
$ export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:~/instantclient_11_2
$ export OCI_LIB_DIR=~/instantclient_11_2
$ export OCI_INC_DIR=~/instantclient_11_2/sdk/include
$ meteor add metstrike:meteor-oracle
$ meteor
```

设置连接数据库
```
$ vi lib/collections.js
if(Meteor.isServer) {
  Oracle.setDefaultOracleOptions(
    {connection: {
        user: "meteor",
        password: "meteor",
        connectString: "192.168.99.100:1521/xe"
        }
    });
}
~
```

新增测试数据
```
create table "tasks" ("_id" varchar2(17) not null);
alter table "tasks" add constraint "tasks_PK" primary key ("_id");

alter table "tasks" add ("text" varchar2(100) not null);
alter table "tasks" add ("priority" number(1) not null);
alter table "todos" add ("userId" varchar2(4) not null);
```
