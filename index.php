


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>JSON</title>
	<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</head>
<body>
	<div class="container mt-5">
		<form method="get" class="mb-5" action="/">
			<div class="form-floating">
				<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px" name="json"></textarea>
				<label for="floatingTextarea2">Json который надо обработать</label>
			</div>
			<button type="submit" class="btn btn-primary mt-3 p-3">обработать</button>
		</form>
		<label for="floatingTextarea2">Результат</label> <br> <br>
		<?
			if(isset($_GET['json'])){
				$array = json_decode($_GET['json'], true);
				echo '<pre>';
				foreach($array as $key=>$value){
					if($key == "approveNumber" or $key == 'hiddenReferences' or $key == 'title') continue;
					echo '"'.$key.'": {<br>';
					echo '&nbsp&nbsp"html": "t."'.$key.'"<br>';
					echo '},<br>';
				}
			}
			?>

	</div>
</body>
</html>