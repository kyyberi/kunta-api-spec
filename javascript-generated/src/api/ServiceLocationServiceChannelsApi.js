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
    define(['ApiClient', 'model/BadRequest', 'model/ServiceLocationServiceChannel', 'model/Forbidden', 'model/InternalServerError', 'model/NotFound'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/ServiceLocationServiceChannel'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/NotFound'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.ServiceLocationServiceChannelsApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.ServiceLocationServiceChannel, root.KuntaApiClient.Forbidden, root.KuntaApiClient.InternalServerError, root.KuntaApiClient.NotFound);
  }
}(this, function(ApiClient, BadRequest, ServiceLocationServiceChannel, Forbidden, InternalServerError, NotFound) {
  'use strict';

  /**
   * ServiceLocationServiceChannels service.
   * @module api/ServiceLocationServiceChannelsApi
   * @version 0.0.111
   */

  /**
   * Constructs a new ServiceLocationServiceChannelsApi. 
   * @alias module:api/ServiceLocationServiceChannelsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Finds a service location service by id
     * Finds a service location service by id
     * @param {String} serviceLocationServiceChannelId serviceLocationChannel id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceLocationServiceChannel}
     */
    this.findServiceLocationServiceChannel = function(serviceLocationServiceChannelId) {
      var postBody = null;

      // verify the required parameter 'serviceLocationServiceChannelId' is set
      if (serviceLocationServiceChannelId == undefined || serviceLocationServiceChannelId == null) {
        throw "Missing the required parameter 'serviceLocationServiceChannelId' when calling findServiceLocationServiceChannel";
      }


      var pathParams = {
        'serviceLocationServiceChannelId': serviceLocationServiceChannelId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = ServiceLocationServiceChannel;

      return this.apiClient.callApi(
        '/serviceLocationServiceChannels/{serviceLocationServiceChannelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists service location service channels
     * Lists service location service channels
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Organization id
     * @param {String} opts.search Search service location channels by free-text query
     * @param {String} opts.sortBy define order (NATURAL or SCORE). Default is NATURAL
     * @param {String} opts.sortDir ASC or DESC. Default is ASC
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ServiceLocationServiceChannel>}
     */
    this.listServiceLocationServiceChannels = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'organizationId': opts['organizationId'],
        'search': opts['search'],
        'sortBy': opts['sortBy'],
        'sortDir': opts['sortDir'],
        'firstResult': opts['firstResult'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [ServiceLocationServiceChannel];

      return this.apiClient.callApi(
        '/serviceLocationServiceChannels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Updates a service location channel
     * Updates a service location channel
     * @param {String} serviceLocationServiceChannelId serviceLocationChannel id
     * @param {module:model/ServiceLocationServiceChannel} serviceLocationChannel New service location channel data
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ServiceLocationServiceChannel}
     */
    this.updateServiceLocationServiceChannel = function(serviceLocationServiceChannelId, serviceLocationChannel) {
      var postBody = serviceLocationChannel;

      // verify the required parameter 'serviceLocationServiceChannelId' is set
      if (serviceLocationServiceChannelId == undefined || serviceLocationServiceChannelId == null) {
        throw "Missing the required parameter 'serviceLocationServiceChannelId' when calling updateServiceLocationServiceChannel";
      }

      // verify the required parameter 'serviceLocationChannel' is set
      if (serviceLocationChannel == undefined || serviceLocationChannel == null) {
        throw "Missing the required parameter 'serviceLocationChannel' when calling updateServiceLocationServiceChannel";
      }


      var pathParams = {
        'serviceLocationServiceChannelId': serviceLocationServiceChannelId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = ServiceLocationServiceChannel;

      return this.apiClient.callApi(
        '/serviceLocationServiceChannels/{serviceLocationServiceChannelId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
