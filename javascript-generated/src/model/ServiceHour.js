/**
 * Kunta API
 * One API to rule them all. One API to find them, One API to bring them all and in the darkness bind them.
 *
 * OpenAPI spec version: 0.0.1
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
    root.KuntaApiClient.ServiceHour = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.LocalizedValue);
  }
}(this, function(ApiClient, LocalizedValue) {
  'use strict';




  /**
   * The ServiceHour model module.
   * @module model/ServiceHour
   * @version 0.0.14
   */

  /**
   * Constructs a new <code>ServiceHour</code>.
   * @alias module:model/ServiceHour
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ServiceHour</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ServiceHour} obj Optional instance to populate.
   * @return {module:model/ServiceHour} The populated <code>ServiceHour</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('validFrom')) {
        obj['validFrom'] = ApiClient.convertToType(data['validFrom'], 'Date');
      }
      if (data.hasOwnProperty('validTo')) {
        obj['validTo'] = ApiClient.convertToType(data['validTo'], 'Date');
      }
      if (data.hasOwnProperty('opens')) {
        obj['opens'] = ApiClient.convertToType(data['opens'], 'String');
      }
      if (data.hasOwnProperty('closes')) {
        obj['closes'] = ApiClient.convertToType(data['closes'], 'String');
      }
      if (data.hasOwnProperty('days')) {
        obj['days'] = ApiClient.convertToType(data['days'], ['Integer']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('additionalInformation')) {
        obj['additionalInformation'] = ApiClient.convertToType(data['additionalInformation'], [LocalizedValue]);
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Date} validFrom
   */
  exports.prototype['validFrom'] = undefined;
  /**
   * @member {Date} validTo
   */
  exports.prototype['validTo'] = undefined;
  /**
   * @member {String} opens
   */
  exports.prototype['opens'] = undefined;
  /**
   * @member {String} closes
   */
  exports.prototype['closes'] = undefined;
  /**
   * @member {Array.<Integer>} days
   */
  exports.prototype['days'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Array.<module:model/LocalizedValue>} additionalInformation
   */
  exports.prototype['additionalInformation'] = undefined;



  return exports;
}));

