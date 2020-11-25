Realizat de Carmici Alexandru-Andrei.
Idei de imbunatatire suplimentare, pe langa cele principale, la acest proiect au mai fost realizate: robotul site-ului, sistem de login, register si dashboard in php, MySQL.

Baza de date creata din linia de comanda la care se conecteaza se numeste register, iar tabelul in care se pastreaza datele user-ilor se numeste users, fiind creat din linie de comanda astfel:
	
CREATE TABLE `users` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `username` varchar(50) NOT NULL,
 `email` varchar(50) NOT NULL,
 `password` varchar(50) NOT NULL,
 `trn_date` datetime NOT NULL,
 PRIMARY KEY (`id`)
);

Limbaje in care au fost realizate task-urile: HTML, Vanila CSS, Vanila Javascript, Vanila PHP.
Tool-uri folosite: xampp.