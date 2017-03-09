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
    define(['ApiClient', 'model/LocalizedValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LocalizedValue'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.Address = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.LocalizedValue);
  }
}(this, function(ApiClient, LocalizedValue) {
  'use strict';




  /**
   * The Address model module.
   * @module model/Address
   * @version 0.0.57
   */

  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('postOfficeBox')) {
        obj['postOfficeBox'] = ApiClient.convertToType(data['postOfficeBox'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('postOffice')) {
        obj['postOffice'] = ApiClient.convertToType(data['postOffice'], 'String');
      }
      if (data.hasOwnProperty('streetAddress')) {
        obj['streetAddress'] = ApiClient.convertToType(data['streetAddress'], [LocalizedValue]);
      }
      if (data.hasOwnProperty('municipality')) {
        obj['municipality'] = ApiClient.convertToType(data['municipality'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('qualifier')) {
        obj['qualifier'] = ApiClient.convertToType(data['qualifier'], 'String');
      }
      if (data.hasOwnProperty('additionalInformations')) {
        obj['additionalInformations'] = ApiClient.convertToType(data['additionalInformations'], [LocalizedValue]);
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} postOfficeBox
   */
  exports.prototype['postOfficeBox'] = undefined;
  /**
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * @member {String} postOffice
   */
  exports.prototype['postOffice'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} streetAddress
   */
  exports.prototype['streetAddress'] = undefined;
  /**
   * @member {String} municipality
   */
  exports.prototype['municipality'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} qualifier
   */
  exports.prototype['qualifier'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} additionalInformations
   */
  exports.prototype['additionalInformations'] = undefined;



  return exports;
}));


