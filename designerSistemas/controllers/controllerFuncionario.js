	angular.module("funcionario").controller("funcionarioCtrl", function($scope, $interval,$window){
		$scope.tarefas = [
			{nome:"Juliano Almeida", atividade:"consultou IPTU", horario:"15:30", data: "25/05/2015"},
			{nome:"Arthur Rocha", atividade:"consultou IPTU", horario:"15:37", data:"29/01/2015"},
			{nome:"Wagner Siqueira", atividade:"emitiu IPTU", horario:"20:50", data:"21/05/2015"},
			{nome:"Letícia de Matos", atividade:"emitiu IPTU", horario:"19:30", data:"21/05/2015"},
			{nome:"César dos Santos", atividade:"consultou IPTU", horario:"7:20", data:"25/05/2015"},
			{nome:"Pedro Henrique", atividade:"consultou IPTU", horario:"4:20", data:"20/05/2015"},
		];
					
		$scope.funcionario = [
			{nome: "Claúdio Manoel"}
			];
			
				$scope.impostos = 1;
				$interval(function()
				{
					$scope.impostos += 1;	
				},2000);
					
				$scope.logout = function () {
				$window.location.href = 'index.html'
				};
		});
			