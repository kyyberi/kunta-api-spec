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
    define(['ApiClient', 'model/Address', 'model/Email', 'model/LocalizedValue', 'model/Municipality', 'model/Phone', 'model/ServiceHour', 'model/WebPage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./Email'), require('./LocalizedValue'), require('./Municipality'), require('./Phone'), require('./ServiceHour'), require('./WebPage'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.ServiceLocationServiceChannel = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.Address, root.KuntaApiClient.Email, root.KuntaApiClient.LocalizedValue, root.KuntaApiClient.Municipality, root.KuntaApiClient.Phone, root.KuntaApiClient.ServiceHour, root.KuntaApiClient.WebPage);
  }
}(this, function(ApiClient, Address, Email, LocalizedValue, Municipality, Phone, ServiceHour, WebPage) {
  'use strict';




  /**
   * The ServiceLocationServiceChannel model module.
   * @module model/ServiceLocationServiceChannel
   * @version 0.0.80
   */

  /**
   * Constructs a new <code>ServiceLocationServiceChannel</code>.
   * @alias module:model/ServiceLocationServiceChannel
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>ServiceLocationServiceChannel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceLocationServiceChannel} obj Optional instance to populate.
   * @return {module:model/ServiceLocationServiceChannel} The populated <code>ServiceLocationServiceChannel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
      if (data.hasOwnProperty('phoneNumbers')) {
        obj['phoneNumbers'] = ApiClient.convertToType(data['phoneNumbers'], [Phone]);
      }
      if (data.hasOwnProperty('emails')) {
        obj['emails'] = ApiClient.convertToType(data['emails'], [Email]);
      }
      if (data.hasOwnProperty('languages')) {
        obj['languages'] = ApiClient.convertToType(data['languages'], ['String']);
      }
      if (data.hasOwnProperty('phoneServiceCharge')) {
        obj['phoneServiceCharge'] = ApiClient.convertToType(data['phoneServiceCharge'], 'Boolean');
      }
      if (data.hasOwnProperty('webPages')) {
        obj['webPages'] = ApiClient.convertToType(data['webPages'], [WebPage]);
      }
      if (data.hasOwnProperty('serviceAreas')) {
        obj['serviceAreas'] = ApiClient.convertToType(data['serviceAreas'], [Municipality]);
      }
      if (data.hasOwnProperty('addresses')) {
        obj['addresses'] = ApiClient.convertToType(data['addresses'], [Address]);
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
   * Identifier for the service channel.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Organization identifier responsible for the channel.
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * Localized list of service channel names.
   * @member {Array.<module:model/LocalizedValue>} names
   */
  exports.prototype['names'] = undefined;
  /**
   * List of localized service channel descriptions.
   * @member {Array.<module:model/LocalizedValue>} descriptions
   */
  exports.prototype['descriptions'] = undefined;
  /**
   * Is the service location channel restricted by service area.
   * @member {Boolean} serviceAreaRestricted
   */
  exports.prototype['serviceAreaRestricted'] = undefined;
  /**
   * List of phone numbers for the service channel. Includes also fax numbers.
   * @member {Array.<module:model/Phone>} phoneNumbers
   */
  exports.prototype['phoneNumbers'] = undefined;
  /**
   * List email addresses for the service channel.
   * @member {Array.<module:model/Email>} emails
   */
  exports.prototype['emails'] = undefined;
  /**
   * List of languages the service channel is available in (two letter language code).
   * @member {Array.<String>} languages
   */
  exports.prototype['languages'] = undefined;
  /**
   * Is the phone service charged for.
   * @member {Boolean} phoneServiceCharge
   */
  exports.prototype['phoneServiceCharge'] = undefined;
  /**
   * List of service channel web pages.
   * @member {Array.<module:model/WebPage>} webPages
   */
  exports.prototype['webPages'] = undefined;
  /**
   * List of serviceareas. Used when location service channel is restricted by service area (ServiceAreaRestricted=true).
   * @member {Array.<module:model/Municipality>} serviceAreas
   */
  exports.prototype['serviceAreas'] = undefined;
  /**
   * List of service location addresses.
   * @member {Array.<module:model/Address>} addresses
   */
  exports.prototype['addresses'] = undefined;
  /**
   * List of service channel service hours.
   * @member {Array.<module:model/ServiceHour>} serviceHours
   */
  exports.prototype['serviceHours'] = undefined;
  /**
   * Service channel publishing status. Values: Draft, Published, Deleted, Modified or OldPublished.
   * @member {String} publishingStatus
   */
  exports.prototype['publishingStatus'] = undefined;



  return exports;
}));


