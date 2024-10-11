<?php
// connexion à nogtre BDD "securite"
$pdo = new PDO('mysql:host=localhost;dbname=securite', 'db_user', '12345', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));

if ($_POST) {
    $_POST['pseudo'] = htmlentities($_POST['pseudo'], ENT_QUOTES);
    $_POST['mot_de_passe'] = htmlentities($_POST['mot_de_passe'], ENT_QUOTES);
    // echo "Pseudo posté: $_POST[pseudo] <br>";
    // echo "Mot de passe posté: $_POST[mot_de_passe]";
    $req = "SELECT * FROM membre Where pseudo='$_POST[pseudo]' AND mdp='$_POST[mot_de_passe]'";
    $resultat = $pdo->query($req);
    // affichage de notre requête
    echo 'requête debug : ' . $req;
    $membre = $resultat->fetch();
    // var_dump($resultat);
    if (!empty($membre)) {
        echo '<div class="validation"><h1>Vous êtes bien reconnu par le site web pour vous connecter...</h1></div>';
        echo "votre id est : " . $membre['id_membre'] . "<br>";
        echo "votre pseudo est : " . $membre['pseudo'] . "<br>";
        echo "votre mdp est : " . $membre['mdp'] . "<br>";
        echo "votre nom est : " . $membre['nom'] . "<br>";
        echo "votre prenom est : " . $membre['prenom'] . "<br>";
        echo "votre email est : " . $membre['email'] . "<br>";
    } else {
        echo '<div class="erreur"><h1>Erreur d\'identification</h1></div>';
    }
}

?>
<!-- Création du formulaire de connexion -->
<hr> <!--  ligne HTML -->

<form method="post" action="">
    <label for="pseudo">Pseudo</label><br>
    <input name="pseudo" type="text">
    <label for="mot_de_passe">Mot de passe</label><br>
    <input name="mot_de_passe" type="text">
    <button>Se connecter</button>
</form>