/**
 * Kunta API
 * Solution to combine municipality services under single API.
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
    define(['ApiClient', 'model/BadRequest', 'model/FileDef', 'model/Forbidden', 'model/InternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/FileDef'), require('../model/Forbidden'), require('../model/InternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.FilesApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.FileDef, root.KuntaApiClient.Forbidden, root.KuntaApiClient.InternalServerError);
  }
}(this, function(ApiClient, BadRequest, FileDef, Forbidden, InternalServerError) {
  'use strict';

  /**
   * Files service.
   * @module api/FilesApi
   * @version 0.0.32
   */

  /**
   * Constructs a new FilesApi. 
   * @alias module:api/FilesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Finds organizations file
     * Finds single organization file 
     * @param {String} organizationId Organization id
     * @param {String} fileId file id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FileDef}
     */
    this.findOrganizationFile = function(organizationId, fileId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationFile";
      }

      // verify the required parameter 'fileId' is set
      if (fileId == undefined || fileId == null) {
        throw "Missing the required parameter 'fileId' when calling findOrganizationFile";
      }


      var pathParams = {
        'organizationId': organizationId,
        'fileId': fileId
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
      var returnType = FileDef;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/files/{fileId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Returns an organization file data
     * Returns an organization file data 
     * @param {String} organizationId Organization id
     * @param {String} fileId file id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getOrganizationFileData = function(organizationId, fileId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling getOrganizationFileData";
      }

      // verify the required parameter 'fileId' is set
      if (fileId == undefined || fileId == null) {
        throw "Missing the required parameter 'fileId' when calling getOrganizationFileData";
      }


      var pathParams = {
        'organizationId': organizationId,
        'fileId': fileId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/octet-stream'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/organizations/{organizationId}/files/{fileId}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists organizations files
     * Lists organizations files 
     * @param {String} organizationId Organization id
     * @param {Object} opts Optional parameters
     * @param {String} opts.pageId Filter with page
     * @param {String} opts.search Search files by free-text query
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/FileDef>}
     */
    this.listOrganizationFiles = function(organizationId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationFiles";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'pageId': opts['pageId'],
        'search': opts['search'],
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
      var returnType = [FileDef];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
