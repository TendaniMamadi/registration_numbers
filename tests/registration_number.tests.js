describe('registration_numbers', function () {
    it('Should display registration for Cape Town', function () {

        const RegistrationApp = registrationApp();
        RegistrationApp.setDisplayRegistration("CA 98765");
    
        assert.equal("CA 98765", RegistrationApp.getDisplayRegistration());

    });

    it('Should display registration for Johannesburg', function () {

        const RegistrationApp = registrationApp();
        RegistrationApp.setDisplayRegistration("CZH 182 GP");
     
        assert.equal("CZH 182 GP", RegistrationApp.getDisplayRegistration());
       
    });

    it('Should display registration for Durban', function () {

        const RegistrationApp = registrationApp();
        RegistrationApp.setDisplayRegistration("ND 98765");
      
        assert.equal("ND 98765", RegistrationApp.getDisplayRegistration());
      

    });

    it('Should display registration for Polokwane', function () {

        const RegistrationApp = registrationApp();
        RegistrationApp.setDisplayRegistration("BCC 230 L");

        assert.equal("BCC 230 L", RegistrationApp.getDisplayRegistration());

    });

});