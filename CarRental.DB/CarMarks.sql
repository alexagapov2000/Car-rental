﻿CREATE TABLE [dbo].[CarMarks]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] NCHAR(500) NOT NULL, 
    [FuelConsumption] INT NOT NULL, 
    [Seats] INT NOT NULL 
)
