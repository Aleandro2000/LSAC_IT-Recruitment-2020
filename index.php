<!DOCTYPE html>
<html>
    <head>
        <title>
            Ajutor pentru Programator
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./css/structure.css">
        <link rel="stylesheet" href="./css/robot.css">
        <link rel="stylesheet" href="./css/modal.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script type="text/javascript" src="./javascript/scripts.js"></script>
        <script type="text/javascript" src="./javascript/robot.js"></script>
        <script type="text/javascript" src="./javascript/claims.js"></script>
        <script type="text/javascript" src="./javascript/mail.js"></script>
    </head>
    <body>
        <ul class="menu">
            <li class="menu-item" style="float: left;">
                <img src="./Resources/logo.svg" class="responsive-logo">
            </li>
            <li class="menu-item shown" onclick="openNav();">
                <img src="./Resources/menu_button.svg"/>
            </li>
            <a href="#contact">
                <li class="menu-item menu-item-hover hidden">
                    Contact
                </li>
            </a>
            <a href="./php/registration.php">
                <li class="menu-item menu-item-hover hidden">
                    Creare Cont
                </li>
            </a>
            <a href="./php/login.php">
                <li class="menu-item login hidden">
                    Logare
                </li>
            </a>
        </ul>
        <div id="nav" class="overlay">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
                &times;
            </a>
                <div class="overlay-content">
                    <a href="./php/login.php" class="mobile-ref" style="color: #92E3A9;">Logare</a>
                    <a href="./php/registration.php" class="mobile-ref">Creare Cont</a>
                    <a href="#contact" class="mobile-ref" onclick="closeNav()">Contact</a>
                </div>
        </div>
        <div class="presentation">
            <div class="content">
                <div>
                    <p class="title">
                        <b>
                            Cumpăratul de teme nu a fost niciodată mai simplu!
                        </b>
                    </p>
                    <p class="text">
                        Platforma ideala pentru studenții de la Politehnică cu portofele pline, care au nevoie urgent de un înger care să le repare nota de intrare în examen.
                    </p>
                    <button class="black-button presentation-button" id="myBtn">
                        <b>
                            Vreau să cumpăr
                        </b>
                    </button>
                    <button class="green-button" onclick="advice();">
                        <b>
                            Vreau sa fac teme pentru alții
                        </b>
                    </button>
                </div>
                <img src="./Resources/library.svg" class="responsive-library">
            </div>
            <center>
                <img src="./Resources/library.svg" class="responsive-library-result">
            </center>
        </div>
        <div class="describe">
            <center>
                <span class="describing-text">
                    <b>
                        Cum funcționează?
                    </b>
                </span>
            </center>
            <div class="table">
                <div class="row">
                    <div class="column">
                        <div class="describind-text-content">
                            <div class="row">
                                <div class="column" style="width: 10%;">
                                    <img src="./Resources/1.svg"/>
                                </div>
                                <div class="column" style="width: 70%;">
                                    Realizezi un cont pe platformă în care introduci câteva detalii personale (nu vă faceți griji, profesorii nu or să va descopere) și materiile la care ai nevoie de ajutor.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="describind-text-content">
                            <div class="row">
                                <div class="column" style="width: 10%;">
                                    <img src="./Resources/2.svg"/>
                                </div>
                                <div class="column" style="width: 70%;">
                                    Străbați platforma în căutare de studenți care oferă servicii la materiile dorite sau te rogi la Sfântul 5 să primești mesaj de la cineva care te descoperă și e dispus să te salveze.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="describind-text-content">
                            <div class="row">
                                <div class="column" style="width: 10%;">
                                    <img src="./Resources/3.svg"/>
                                </div>
                                <div class="column" style="width: 70%;">
                                    După ce stabiliți o sumă care oricum este de zeci de ori mai mare decât la alte universități, aștepti ca noul vostru amic să vă încarce soluția pe platformă. Jumătate din plată oferiți în avans, restul după ce vă vedeți intrat în examen.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form" id="contact">
            <div class="form-row">
                <div class="form-column">
                    <p class="form-title form-center">
                        <b>
                            Ai tupeu și crezi că poți să aduci îmbunătățiri la platformă?
                        </b>
                    </p>
                    <p class="form-center form-text-padding">
                        Trimite-ne un mail și roagă-te să nu ne apuce râsul când vedem ce îți trece prin cap.
                    </p>
                </div>
                <div class="form-column">
                    <label for="name">
                        Nume
                    </label>
                    <input type="text" id="name" class="normal-input">
                    <label for="email">
                        Email
                    </label>
                    <input type="email" id="email" class="normal-input">
                    <label for="text">
                        Înjurătura
                    </label>
                    <br>
                    <textarea cols="20" rows="10" id="message" value="" class="normal-input"></textarea>
                    <center>
                        <button class="send-button" onclick="mail();">
                            Trimite
                        </button>
                    </center>
                    <span id="mail-data"></span>
                </div>
            </div>
        </div>
        <div class="footer">
            <a href="https://www.instagram.com/">
                <i class="fa fa-instagram" style="font-size: 25.16px;"></i>
            </a>    
            <a href="https://twitter.com/">
                <i class="fa fa-twitter twitter" style="font-size: 25.16px;"></i>
            </a>    
            <a href="https://www.facebook.com/">
                <i class="fa fa-facebook facebook" style="font-size: 23.05px;"></i>
            </a>
            <br>
            <p style="font-size: 15px;">
                Copyright 2020 | Cine ne pârăște o mierlește.
            </p>
        </div>

        <!--Robot-->
        <div id="section">
            <img src="./Resources/robot.png" class="open-button" onclick="openForm()">
            <span class="active"></span>
            <div class="chat-popup" id="Chatbot">
                <h1>Chatbot</h1>
                <br><br>
                <div style="margin-bottom: 10px;">you: <span id="user"></span></div>
	            <div style="margin-bottom: 10px;">Chatbot: <span id="chatbot"></span></div>
	            <div style="margin-bottom: 50px;"><input class="robot-input" id="input" type="text" placeholder="Say something!" autocomplete="off"/></div>
                <center>
                    <span class="btn cancel" onclick="closeForm()">Close</button>
                </center>
            </div>
        </div>

        <!--Modal form-->
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
              <div class="modal-header">
                <span class="close">&times;</span>
                <h2>Exprimă-ți frustrările</h2>
              </div>
              <div class="modal-body">
                <center>
                    <select class="modal-input" id="area"></select>
                    <input type="text" id="title" class="modal-input" placeholder="Titlul proiectului"/>
                    <br>
                    <button class="modal-black-button" onclick="claims();">
                        Încarcă
                    </button>
                </center>
              </div>
              <div class="modal-header">
                <h3>Plângeri introduse până acum.</h3>
              </div>
              <div class="modal-body" id="reports"></div>
            </div>
          
          </div>
        <script type="text/javascript">
            robot();
            modal();
            select_option();
        </script>
    </body>
</html>