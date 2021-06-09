create table dbo.DataOfUser(
	DataUserId int identity(1,1),
	DataUserName varchar (500),
	DataUserEmail varchar(500),
	DataUserPassword varchar(50),
	DataUserRole int,

)

insert into dbo.DataOfUser values ('Filan','filan@example.com','password123','0')

select * from dbo.DataOfUser