create table dbo.ProjectData(
	ProjectId int identity(1,1),
	ProjectProblem NTEXT,
	ProjectProgres int,

)

insert into dbo.ProjectData values ('TEXT','89')

select * from dbo.ProjectData