create table dbo.Rating(
	RatingId int identity(1,1),
	Rating DECIMAL(1,0) ,

)

insert into dbo.Rating values ('3.8')

select * from dbo.Rating