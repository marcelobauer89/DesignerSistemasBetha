
angular.module("login").controller("loginCtrl", function ($scope, $window, $timeout){
$scope.user = [
	{id:"1", cpf:"123456789", numInscricao:"123456"},	
	{id:"2", cpf:"987654321", numInscricao:"654321"},	
	];
	
	$scope.error = false;
					
	$scope.logar = function (dados){		
	if ($scope.user[0].cpf == dados.cpf && $scope.user[0].numInscricao == dados.numInscricao)
	{
		$window.location.href = 'viewPainel.html';

	}else if ($scope.user[1].cpf == dados.cpf && $scope.user[1].numInscricao == dados.numInscricao) {
		
		$window.location.href = 'viewFuncionarios.html';
	} else {
				$scope.error = true;
				$timeout(function(){
				$scope.error = false;
				},3000);
				delete $scope.dados;
			}
	};
});	