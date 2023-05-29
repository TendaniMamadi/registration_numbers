function registrationApp(){
    var plates = [];
    
    function setDisplayRegistration(numberPlate){
        //create empty array to push registration
        //displays the number plate from that city
        if(numberPlate.startsWith("CA")){
            plates.push(numberPlate);
            
        }

        if(numberPlate.endsWith("GP")){
            plates.push(numberPlate);
            
        }

        if(numberPlate.startsWith("ND")){
            plates.push(numberPlate);
            
        }

        if(numberPlate.endsWith("L")){
            plates.push(numberPlate);
            
        }
    }

    function getDisplayRegistration(){

        return plates;
    }

    function setFilter(city){
        //function that filters data per city

    }


    return{
        setDisplayRegistration,
        getDisplayRegistration,
        setFilter
    }
}