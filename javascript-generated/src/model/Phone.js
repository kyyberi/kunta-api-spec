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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.Phone = factory(root.KuntaApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Phone model module.
   * @module model/Phone
   * @version 0.0.105
   */

  /**
   * Constructs a new <code>Phone</code>.
   * @alias module:model/Phone
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Phone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Phone} obj Optional instance to populate.
   * @return {module:model/Phone} The populated <code>Phone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additionalInformation')) {
        obj['additionalInformation'] = ApiClient.convertToType(data['additionalInformation'], 'String');
      }
      if (data.hasOwnProperty('serviceChargeType')) {
        obj['serviceChargeType'] = ApiClient.convertToType(data['serviceChargeType'], 'String');
      }
      if (data.hasOwnProperty('chargeDescription')) {
        obj['chargeDescription'] = ApiClient.convertToType(data['chargeDescription'], 'String');
      }
      if (data.hasOwnProperty('prefixNumber')) {
        obj['prefixNumber'] = ApiClient.convertToType(data['prefixNumber'], 'String');
      }
      if (data.hasOwnProperty('isFinnishServiceNumber')) {
        obj['isFinnishServiceNumber'] = ApiClient.convertToType(data['isFinnishServiceNumber'], 'Boolean');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} additionalInformation
   */
  exports.prototype['additionalInformation'] = undefined;
  /**
   * @member {String} serviceChargeType
   */
  exports.prototype['serviceChargeType'] = undefined;
  /**
   * @member {String} chargeDescription
   */
  exports.prototype['chargeDescription'] = undefined;
  /**
   * @member {String} prefixNumber
   */
  exports.prototype['prefixNumber'] = undefined;
  /**
   * @member {Boolean} isFinnishServiceNumber
   */
  exports.prototype['isFinnishServiceNumber'] = undefined;
  /**
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


