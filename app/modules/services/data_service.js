angular.module('tgtApp').factory("dataService",function($http,$q){
    var prdtObj = {};
    prdtObj.getItems = function(){
        var deferred=$q.defer();
        $http.get("/data/item-data.json").success(function(data){
          deferred.resolve(data.CatalogEntryView);
        }).error(function(err){
          deferred.reject(err);
        });
        return deferred.promise;
    };
    return prdtObj;
});