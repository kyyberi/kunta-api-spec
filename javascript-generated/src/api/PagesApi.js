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
    define(['ApiClient', 'model/BadRequest', 'model/Forbidden', 'model/Page', 'model/InternalServerError', 'model/LocalizedValue', 'model/Attachment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Forbidden'), require('../model/Page'), require('../model/InternalServerError'), require('../model/LocalizedValue'), require('../model/Attachment'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.PagesApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.Forbidden, root.KuntaApiClient.Page, root.KuntaApiClient.InternalServerError, root.KuntaApiClient.LocalizedValue, root.KuntaApiClient.Attachment);
  }
}(this, function(ApiClient, BadRequest, Forbidden, Page, InternalServerError, LocalizedValue, Attachment) {
  'use strict';

  /**
   * Pages service.
   * @module api/PagesApi
   * @version 0.0.72
   */

  /**
   * Constructs a new PagesApi. 
   * @alias module:api/PagesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Finds organizations page
     * Finds single organization page 
     * @param {String} organizationId Organization id
     * @param {String} pageId page id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Page}
     */
    this.findOrganizationPage = function(organizationId, pageId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationPage";
      }

      // verify the required parameter 'pageId' is set
      if (pageId == undefined || pageId == null) {
        throw "Missing the required parameter 'pageId' when calling findOrganizationPage";
      }


      var pathParams = {
        'organizationId': organizationId,
        'pageId': pageId
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
      var returnType = Page;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/pages/{pageId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Returns organizations page content in all available languages
     * Returns single organization page content in all available languages 
     * @param {String} organizationId Organization id
     * @param {String} pageId page id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LocalizedValue>}
     */
    this.findOrganizationPageContent = function(organizationId, pageId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationPageContent";
      }

      // verify the required parameter 'pageId' is set
      if (pageId == undefined || pageId == null) {
        throw "Missing the required parameter 'pageId' when calling findOrganizationPageContent";
      }


      var pathParams = {
        'organizationId': organizationId,
        'pageId': pageId
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
      var returnType = [LocalizedValue];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/pages/{pageId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Returns a single organiztion page image
     * Returns a single organiztion page image 
     * @param {String} organizationId Organization id
     * @param {String} pageId Page Id
     * @param {String} imageId Page image id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Attachment}
     */
    this.findOrganizationPageImage = function(organizationId, pageId, imageId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationPageImage";
      }

      // verify the required parameter 'pageId' is set
      if (pageId == undefined || pageId == null) {
        throw "Missing the required parameter 'pageId' when calling findOrganizationPageImage";
      }

      // verify the required parameter 'imageId' is set
      if (imageId == undefined || imageId == null) {
        throw "Missing the required parameter 'imageId' when calling findOrganizationPageImage";
      }


      var pathParams = {
        'organizationId': organizationId,
        'pageId': pageId,
        'imageId': imageId
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
      var returnType = Attachment;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/pages/{pageId}/images/{imageId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Returns an organization page image data
     * Returns an organization page image data 
     * @param {String} organizationId Organization id
     * @param {String} pageId Page id
     * @param {String} imageId Page image id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.size Maximum width or height of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getOrganizationPageImageData = function(organizationId, pageId, imageId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling getOrganizationPageImageData";
      }

      // verify the required parameter 'pageId' is set
      if (pageId == undefined || pageId == null) {
        throw "Missing the required parameter 'pageId' when calling getOrganizationPageImageData";
      }

      // verify the required parameter 'imageId' is set
      if (imageId == undefined || imageId == null) {
        throw "Missing the required parameter 'imageId' when calling getOrganizationPageImageData";
      }


      var pathParams = {
        'organizationId': organizationId,
        'pageId': pageId,
        'imageId': imageId
      };
      var queryParams = {
        'size': opts['size']
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
        '/organizations/{organizationId}/pages/{pageId}/images/{imageId}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Returns a list of organization page images
     * Returns a list of organization page images 
     * @param {String} organizationId Organization id
     * @param {String} pageId Page id
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Filter by type
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Attachment>}
     */
    this.listOrganizationPageImages = function(organizationId, pageId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationPageImages";
      }

      // verify the required parameter 'pageId' is set
      if (pageId == undefined || pageId == null) {
        throw "Missing the required parameter 'pageId' when calling listOrganizationPageImages";
      }


      var pathParams = {
        'organizationId': organizationId,
        'pageId': pageId
      };
      var queryParams = {
        'type': opts['type']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [Attachment];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/pages/{pageId}/images', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists organizations pages
     * Lists organizations pages 
     * @param {String} organizationId Organization id
     * @param {Object} opts Optional parameters
     * @param {String} opts.parentId Filter results by parent id
     * @param {String} opts.path Filter results by page path
     * @param {String} opts.search Search pages by free-text query
     * @param {Integer} opts.firstResult First result
     * @param {Integer} opts.maxResults Max results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Page>}
     */
    this.listOrganizationPages = function(organizationId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationPages";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'parentId': opts['parentId'],
        'path': opts['path'],
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
      var returnType = [Page];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/pages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
