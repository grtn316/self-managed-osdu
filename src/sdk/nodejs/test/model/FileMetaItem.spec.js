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
    describe('FileMetaItem', function() {
      beforeEach(function() {
        instance = new SelfManagedOsdu.FileMetaItem();
      });

      it('should create an instance of FileMetaItem', function() {
        // TODO: update the code to test FileMetaItem
        expect(instance).to.be.a(SelfManagedOsdu.FileMetaItem);
      });

      it('should have the property kind (base name: "kind")', function() {
        // TODO: update the code to test the property kind
        expect(instance).to.have.property('kind');
        // expect(instance.kind).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property persistableReference (base name: "persistableReference")', function() {
        // TODO: update the code to test the property persistableReference
        expect(instance).to.have.property('persistableReference');
        // expect(instance.persistableReference).to.be(expectedValueLiteral);
      });

      it('should have the property propertyNames (base name: "propertyNames")', function() {
        // TODO: update the code to test the property propertyNames
        expect(instance).to.have.property('propertyNames');
        // expect(instance.propertyNames).to.be(expectedValueLiteral);
      });

      it('should have the property propertyValues (base name: "propertyValues")', function() {
        // TODO: update the code to test the property propertyValues
        expect(instance).to.have.property('propertyValues');
        // expect(instance.propertyValues).to.be(expectedValueLiteral);
      });

      it('should have the property uncertainty (base name: "uncertainty")', function() {
        // TODO: update the code to test the property uncertainty
        expect(instance).to.have.property('uncertainty');
        // expect(instance.uncertainty).to.be(expectedValueLiteral);
      });

    });
  });

}));
