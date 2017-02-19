/**
 * Kunta API
 * Solution to combine municipality services under single API.
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Address', 'model/LocalizedValue', 'model/ServiceHour', 'model/SupportContact', 'model/WebPage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./LocalizedValue'), require('./ServiceHour'), require('./SupportContact'), require('./WebPage'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.ServiceLocationChannel = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.Address, root.KuntaApiClient.LocalizedValue, root.KuntaApiClient.ServiceHour, root.KuntaApiClient.SupportContact, root.KuntaApiClient.WebPage);
  }
}(this, function(ApiClient, Address, LocalizedValue, ServiceHour, SupportContact, WebPage) {
  'use strict';




  /**
   * The ServiceLocationChannel model module.
   * @module model/ServiceLocationChannel
   * @version 0.0.47
   */

  /**
   * Constructs a new <code>ServiceLocationChannel</code>.
   * @alias module:model/ServiceLocationChannel
   * @class
   */
  var exports = function() {
    var _this = this;
























  };

  /**
   * Constructs a <code>ServiceLocationChannel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceLocationChannel} obj Optional instance to populate.
   * @return {module:model/ServiceLocationChannel} The populated <code>ServiceLocationChannel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('names')) {
        obj['names'] = ApiClient.convertToType(data['names'], [LocalizedValue]);
      }
      if (data.hasOwnProperty('descriptions')) {
        obj['descriptions'] = ApiClient.convertToType(data['descriptions'], [LocalizedValue]);
      }
      if (data.hasOwnProperty('serviceAreaRestricted')) {
        obj['serviceAreaRestricted'] = ApiClient.convertToType(data['serviceAreaRestricted'], 'Boolean');
      }
      if (data.hasOwnProperty('supportContacts')) {
        obj['supportContacts'] = ApiClient.convertToType(data['supportContacts'], [SupportContact]);
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('languages')) {
        obj['languages'] = ApiClient.convertToType(data['languages'], ['String']);
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'String');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'String');
      }
      if (data.hasOwnProperty('coordinateSystem')) {
        obj['coordinateSystem'] = ApiClient.convertToType(data['coordinateSystem'], 'String');
      }
      if (data.hasOwnProperty('coordinatesSetManually')) {
        obj['coordinatesSetManually'] = ApiClient.convertToType(data['coordinatesSetManually'], 'Boolean');
      }
      if (data.hasOwnProperty('phoneServiceCharge')) {
        obj['phoneServiceCharge'] = ApiClient.convertToType(data['phoneServiceCharge'], 'Boolean');
      }
      if (data.hasOwnProperty('webPages')) {
        obj['webPages'] = ApiClient.convertToType(data['webPages'], [WebPage]);
      }
      if (data.hasOwnProperty('serviceAreas')) {
        obj['serviceAreas'] = ApiClient.convertToType(data['serviceAreas'], ['String']);
      }
      if (data.hasOwnProperty('phoneChargeDescriptions')) {
        obj['phoneChargeDescriptions'] = ApiClient.convertToType(data['phoneChargeDescriptions'], [LocalizedValue]);
      }
      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [Address]);
      }
      if (data.hasOwnProperty('chargeTypes')) {
        obj['chargeTypes'] = ApiClient.convertToType(data['chargeTypes'], ['String']);
      }
      if (data.hasOwnProperty('serviceHours')) {
        obj['serviceHours'] = ApiClient.convertToType(data['serviceHours'], [ServiceHour]);
      }
      if (data.hasOwnProperty('publishingStatus')) {
        obj['publishingStatus'] = ApiClient.convertToType(data['publishingStatus'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} names
   */
  exports.prototype['names'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} descriptions
   */
  exports.prototype['descriptions'] = undefined;
  /**
   * @member {Boolean} serviceAreaRestricted
   */
  exports.prototype['serviceAreaRestricted'] = undefined;
  /**
   * @member {Array.<module:model/SupportContact>} supportContacts
   */
  exports.prototype['supportContacts'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {Array.<String>} languages
   */
  exports.prototype['languages'] = undefined;
  /**
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;
  /**
   * @member {String} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * @member {String} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * @member {String} coordinateSystem
   */
  exports.prototype['coordinateSystem'] = undefined;
  /**
   * @member {Boolean} coordinatesSetManually
   */
  exports.prototype['coordinatesSetManually'] = undefined;
  /**
   * @member {Boolean} phoneServiceCharge
   */
  exports.prototype['phoneServiceCharge'] = undefined;
  /**
   * @member {Array.<module:model/WebPage>} webPages
   */
  exports.prototype['webPages'] = undefined;
  /**
   * @member {Array.<String>} serviceAreas
   */
  exports.prototype['serviceAreas'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} phoneChargeDescriptions
   */
  exports.prototype['phoneChargeDescriptions'] = undefined;
  /**
   * @member {Array.<module:model/Address>} addresses
   */
  exports.prototype['addresses'] = undefined;
  /**
   * @member {Array.<String>} chargeTypes
   */
  exports.prototype['chargeTypes'] = undefined;
  /**
   * @member {Array.<module:model/ServiceHour>} serviceHours
   */
  exports.prototype['serviceHours'] = undefined;
  /**
   * @member {String} publishingStatus
   */
  exports.prototype['publishingStatus'] = undefined;



  return exports;
}));


