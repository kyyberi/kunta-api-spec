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
    define(['ApiClient', 'model/BadRequest', 'model/Forbidden', 'model/Menu', 'model/InternalServerError', 'model/MenuItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Forbidden'), require('../model/Menu'), require('../model/InternalServerError'), require('../model/MenuItem'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.MenusApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.Forbidden, root.KuntaApiClient.Menu, root.KuntaApiClient.InternalServerError, root.KuntaApiClient.MenuItem);
  }
}(this, function(ApiClient, BadRequest, Forbidden, Menu, InternalServerError, MenuItem) {
  'use strict';

  /**
   * Menus service.
   * @module api/MenusApi
   * @version 0.0.111
   */

  /**
   * Constructs a new MenusApi. 
   * @alias module:api/MenusApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Finds organizations menu
     * Finds single organization menu 
     * @param {String} organizationId Organization id
     * @param {String} menuId menu id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Menu}
     */
    this.findOrganizationMenu = function(organizationId, menuId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationMenu";
      }

      // verify the required parameter 'menuId' is set
      if (menuId == undefined || menuId == null) {
        throw "Missing the required parameter 'menuId' when calling findOrganizationMenu";
      }


      var pathParams = {
        'organizationId': organizationId,
        'menuId': menuId
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
      var returnType = Menu;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/menus/{menuId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Finds organization menu item
     * Finds single organization menu item 
     * @param {String} organizationId Organization id
     * @param {String} menuId menu id
     * @param {String} menuItemId menu item id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MenuItem}
     */
    this.findOrganizationMenuItem = function(organizationId, menuId, menuItemId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationMenuItem";
      }

      // verify the required parameter 'menuId' is set
      if (menuId == undefined || menuId == null) {
        throw "Missing the required parameter 'menuId' when calling findOrganizationMenuItem";
      }

      // verify the required parameter 'menuItemId' is set
      if (menuItemId == undefined || menuItemId == null) {
        throw "Missing the required parameter 'menuItemId' when calling findOrganizationMenuItem";
      }


      var pathParams = {
        'organizationId': organizationId,
        'menuId': menuId,
        'menuItemId': menuItemId
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
      var returnType = MenuItem;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/menus/{menuId}/items/{menuItemId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists organizations menu items
     * Lists organization menu items 
     * @param {String} organizationId Organization id
     * @param {String} menuId menu id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/MenuItem>}
     */
    this.listOrganizationMenuItems = function(organizationId, menuId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationMenuItems";
      }

      // verify the required parameter 'menuId' is set
      if (menuId == undefined || menuId == null) {
        throw "Missing the required parameter 'menuId' when calling listOrganizationMenuItems";
      }


      var pathParams = {
        'organizationId': organizationId,
        'menuId': menuId
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
      var returnType = [MenuItem];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/menus/{menuId}/items', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists organizations menus
     * Lists organizations menus 
     * @param {String} organizationId Organization id
     * @param {Object} opts Optional parameters
     * @param {String} opts.slug Filter with slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Menu>}
     */
    this.listOrganizationMenus = function(organizationId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationMenus";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'slug': opts['slug']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [Menu];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/menus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
