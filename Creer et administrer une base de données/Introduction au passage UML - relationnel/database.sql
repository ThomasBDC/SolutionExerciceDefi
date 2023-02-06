CREATE TABLE Countries(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(100),
    color varchar(100)
);


CREATE TABLE Events(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(100)
);


CREATE TABLE HotelRooms(
    number INT(11) NOT NULL PRIMARY KEY,
    floor int(5)
);

CREATE TABLE Athletes(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    IdCountry INT(11),
    FOREIGN KEY (IdCountry) REFERENCES Countries(id),
    NumberHotelRoom INT(11),
    FOREIGN KEY (NumberHotelRoom) REFERENCES HotelRooms(number)
);

CREATE TABLE Judokas(
    idAthlete INT(11) NOT NULL PRIMARY KEY, 
    FOREIGN KEY (idAthlete) REFERENCES Athletes(id),
    weight int(5)
);

CREATE TABLE Sailors(
    idAthlete INT(11) NOT NULL PRIMARY KEY, 
    FOREIGN KEY (idAthlete) REFERENCES Athletes(id),
    boatType varchar(200)
);

CREATE TABLE Athletes_Events(
    idEvent int(11) NOT NULL, 
    idAthlete int(11) NOT NULL,
    PRIMARY KEY (idEvent, idAthlete),
    FOREIGN KEY (idAthlete) REFERENCES Athletes(id),
    FOREIGN KEY (idEvent) REFERENCES Events(id)
);