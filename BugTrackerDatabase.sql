create database BugTracker

use BugTracker





CREATE TABLE dbo.ProjectData(
	ID int identity (1,1) primary key,
	ProjectProblem NTEXT,
	ProjectProgres int,
	Contact  int null foreign key references Contact(id)
)
drop table projectdata

insert into ProjectData values ('NTEXT2',29,3)


select * from ProjectData



create table dbo.UserData(
	Email varchar(50) Primary key,
	Username varchar (50),
	Password varchar (50)
)
insert into UserData values ('em45724@ubt-uni.net', 'ermo', 'password')

select Email from UserData








/*Contact tablee*/
create table dbo.Contact(
	ID int identity(1,1) Primary key ,
	UserContact varchar (500) ,
	Email varchar (50) not null foreign key references UserData(Email),
)
/*drop table Contact
*/
insert into Contact values ('This is the contact field','em45724@ubt-uni.net')
select * from Contact












/*Rating Tablee*/
create table dbo.Rating(
	ID int identity(1,1) Primary key ,
	UserRating Decimal (2,1) ,
	Email varchar (50) not null foreign key references UserData(Email),

)
/*DROP TABLE RATING
*/
insert into Rating values (4.5,'em45724@ubt-uni.net' )

select * from Rating

create table dbo.Staff(
	StaffEmail varchar(50) Primary key,
	StaffUsername varchar (50),
	StaffPassword varchar (50)
)
insert into Staff values ('ermalmorina2000@gmail.com','StafErmal','StafErmal')

select * from Staff



create table dbo.Admin(
	AdminEmail varchar(50) Primary key,
	AdminUsername varchar (50),
	AdminPassword varchar (50)
)

insert into Admin values ('Adminem45724@ubt-uni.net','AdminErmal','AdminErmal')

select * from Admin