<?php
	$nome = $_POST['name'];
	$email = $_POST['email'];
	$telefone = $_POST['phone'];
	$sendEmail = $_POST['E-mail'];
	$sendTelefone = $_POST['Telefone'];
	$sendWhatsApp = $_POST['WhatsApp'];
	
	$para = "contato@denistoledo.com.br";
	$assunto = "Proposta online";
	$msg = "
		<b>Nome:</b> $nome<br />
		<b>E-mail:</b> $email<br />
		<b>Telefone:</b> $telefone<br />
		<b>Contactar por:</b> $sendEmail $sendTelefone $sendWhatsApp<br />
	";
	
	$header = "From: $email \r\n";
	$header .= "Content-Type: text/html; charset=utf-8 \r\n";
	
	mail($para,$assunto,$msg,$header);
?>