angular.module("cidadao").controller("cidadaoCtrl", function ($scope,$window, $timeout) {
					$scope.iptus = [
						{id: "1", nome: "Marcelo Bauer", cpf: "123456789", area: "50", endereco: "Rua Torres",valorImovel: "100.000,00" ,cadastro: new Date(), valor: "2000,00", pagamento: "220,25", dataPagamento: new Date()},
						{id: "2", nome: "Marcelo Bauer", cpf: "123456789", area: "80", endereco: "Av. José Bonifacio", valorImovel: "200.000,00", cadastro: new Date(), valor: "2800,00", pagamento: "320,25",dataPagamento: new Date()},
						{id: "3", nome: "Marcelo Bauer", cpf: "123456789", area: "20", endereco: "Rua Barão", valorImovel: "50.000,00", cadastro:new Date(), valor: "1000,00", pagamento: "120,25",dataPagamento: new Date()},	
					];
					
					$scope.emitirIptu = function (dados){
						//pegando datas local
						dados.cadastro = new Date();
						dados.dataPagamento = new Date();
						
						//calculando IPTU
						dados.pagamento = dados.valorImovel * 0.5;
						
						//cadastrando dados no array
					   $scope.iptus.push(angular.copy(dados));	
						
						//deletando dados do form após cadastro
						delete $scope.dados;
						
						$scope.success = true;
						
						$timeout(function(){
								$scope.success = false;
							},5000);
					};
					
						$scope.logout = function () {
							$window.location.href = 'index.html';
						};
				});
				
