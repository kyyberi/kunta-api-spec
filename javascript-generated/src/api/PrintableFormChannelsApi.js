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
    define(['ApiClient', 'model/BadRequest', 'model/Forbidden', 'model/PrintableFormChannel', 'model/InternalServerError', 'model/NotFound'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Forbidden'), require('../model/PrintableFormChannel'), require('../model/InternalServerError'), require('../model/NotFound'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.PrintableFormChannelsApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.Forbidden, root.KuntaApiClient.PrintableFormChannel, root.KuntaApiClient.InternalServerError, root.KuntaApiClient.NotFound);
  }
}(this, function(ApiClient, BadRequest, Forbidden, PrintableFormChannel, InternalServerError, NotFound) {
  'use strict';

  /**
   * PrintableFormChannels service.
   * @module api/PrintableFormChannelsApi
   * @version 0.0.48
   */

  /**
   * Constructs a new PrintableFormChannelsApi. 
   * @alias module:api/PrintableFormChannelsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * creates PrintableFormChannel
     * creates PrintableFormChannel
     * @param {String} serviceId service id
     * @param {module:model/PrintableFormChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrintableFormChannel}
     */
    this.createServicePrintableFormChannel = function(serviceId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling createServicePrintableFormChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling createServicePrintableFormChannel";
      }


      var pathParams = {
        'serviceId': serviceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PrintableFormChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/printableFormChannels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * finds PrintableFormChannel by printableFormChannelId
     * finds PrintableFormChannels by printableFormChannelId
     * @param {String} serviceId Service id
     * @param {String} printableFormChannelId printableFormChannel id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrintableFormChannel}
     */
    this.findServicePrintableFormChannel = function(serviceId, printableFormChannelId) {
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling findServicePrintableFormChannel";
      }

      // verify the required parameter 'printableFormChannelId' is set
      if (printableFormChannelId == undefined || printableFormChannelId == null) {
        throw "Missing the required parameter 'printableFormChannelId' when calling findServicePrintableFormChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'printableFormChannelId': printableFormChannelId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PrintableFormChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/printableFormChannels/{printableFormChannelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists PrintableFormChannels by serviceId
     * Lists PrintableFormChannels by serviceId
     * @param {String} serviceId Service id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PrintableFormChannel>}
     */
    this.listServicePrintableFormChannels = function(serviceId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling listServicePrintableFormChannels";
      }


      var pathParams = {
        'serviceId': serviceId
      };
      var queryParams = {
        'firstResult': opts['firstResult'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [PrintableFormChannel];

      return this.apiClient.callApi(
        '/services/{serviceId}/printableFormChannels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Updates PrintableFormChannel
     * Updates PrintableFormChannel
     * @param {String} serviceId service id
     * @param {String} printableFormChannelId printableFormChannel id
     * @param {module:model/PrintableFormChannel} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PrintableFormChannel}
     */
    this.updatePrintableFormChannel = function(serviceId, printableFormChannelId, body) {
      var postBody = body;

      // verify the required parameter 'serviceId' is set
      if (serviceId == undefined || serviceId == null) {
        throw "Missing the required parameter 'serviceId' when calling updatePrintableFormChannel";
      }

      // verify the required parameter 'printableFormChannelId' is set
      if (printableFormChannelId == undefined || printableFormChannelId == null) {
        throw "Missing the required parameter 'printableFormChannelId' when calling updatePrintableFormChannel";
      }

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updatePrintableFormChannel";
      }


      var pathParams = {
        'serviceId': serviceId,
        'printableFormChannelId': printableFormChannelId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PrintableFormChannel;

      return this.apiClient.callApi(
        '/services/{serviceId}/printableFormChannels/{printableFormChannelId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
