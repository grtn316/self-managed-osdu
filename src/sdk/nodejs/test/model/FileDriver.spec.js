/*
 * self-managed-osdu
 * Rest API Documentation for Self Managed OSDU
 *
 * OpenAPI spec version: 0.11.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.22
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SelfManagedOsdu);
  }
}(this, function(expect, SelfManagedOsdu) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('FileDriver', function() {
      beforeEach(function() {
        instance = SelfManagedOsdu.FileDriver;
      });

      it('should create an instance of FileDriver', function() {
        // TODO: update the code to test FileDriver
        expect(instance).to.be.a('object');
      });

      it('should have the property AZURE', function() {
        expect(instance).to.have.property('AZURE');
        expect(instance.AZURE).to.be("AZURE");
      });

    });
  });

}));
