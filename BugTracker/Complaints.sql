create table dbo.Complaints(
	id int identity(1,1),
	complaints varchar(500) ,

)

insert into dbo.Complaints values ('This is a complain!')

select * from dbo.Complaints