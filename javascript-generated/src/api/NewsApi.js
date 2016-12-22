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
    define(['ApiClient', 'model/BadRequest', 'model/Forbidden', 'model/Attachment', 'model/InternalServerError', 'model/NewsArticle'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Forbidden'), require('../model/Attachment'), require('../model/InternalServerError'), require('../model/NewsArticle'));
  } else {
    // Browser globals (root is window)
    if (!root.KuntaApiClient) {
      root.KuntaApiClient = {};
    }
    root.KuntaApiClient.NewsApi = factory(root.KuntaApiClient.ApiClient, root.KuntaApiClient.BadRequest, root.KuntaApiClient.Forbidden, root.KuntaApiClient.Attachment, root.KuntaApiClient.InternalServerError, root.KuntaApiClient.NewsArticle);
  }
}(this, function(ApiClient, BadRequest, Forbidden, Attachment, InternalServerError, NewsArticle) {
  'use strict';

  /**
   * News service.
   * @module api/NewsApi
   * @version 0.0.34
   */

  /**
   * Constructs a new NewsApi. 
   * @alias module:api/NewsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Returns a single organiztion banner image
     * Returns a single organiztion banner image 
     * @param {String} organizationId Organization id
     * @param {String} bannerId Banner Id
     * @param {String} imageId Banner image id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Attachment}
     */
    this.findOrganizationBannerImage = function(organizationId, bannerId, imageId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationBannerImage";
      }

      // verify the required parameter 'bannerId' is set
      if (bannerId == undefined || bannerId == null) {
        throw "Missing the required parameter 'bannerId' when calling findOrganizationBannerImage";
      }

      // verify the required parameter 'imageId' is set
      if (imageId == undefined || imageId == null) {
        throw "Missing the required parameter 'imageId' when calling findOrganizationBannerImage";
      }


      var pathParams = {
        'organizationId': organizationId,
        'bannerId': bannerId,
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
        '/organizations/{organizationId}/banners/{bannerId}/images/{imageId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Finds organizations news article
     * Finds organizations single news article 
     * @param {String} organizationId Organization id
     * @param {String} newsArticleId News article id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NewsArticle}
     */
    this.findOrganizationNewsArticle = function(organizationId, newsArticleId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationNewsArticle";
      }

      // verify the required parameter 'newsArticleId' is set
      if (newsArticleId == undefined || newsArticleId == null) {
        throw "Missing the required parameter 'newsArticleId' when calling findOrganizationNewsArticle";
      }


      var pathParams = {
        'organizationId': organizationId,
        'newsArticleId': newsArticleId
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
      var returnType = NewsArticle;

      return this.apiClient.callApi(
        '/organizations/{organizationId}/news/{newsArticleId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Returns an news article image
     * Returns an news article image 
     * @param {String} organizationId Organization id
     * @param {String} newsArticleId News article id
     * @param {String} imageId Event image id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Attachment}
     */
    this.findOrganizationNewsArticleImage = function(organizationId, newsArticleId, imageId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling findOrganizationNewsArticleImage";
      }

      // verify the required parameter 'newsArticleId' is set
      if (newsArticleId == undefined || newsArticleId == null) {
        throw "Missing the required parameter 'newsArticleId' when calling findOrganizationNewsArticleImage";
      }

      // verify the required parameter 'imageId' is set
      if (imageId == undefined || imageId == null) {
        throw "Missing the required parameter 'imageId' when calling findOrganizationNewsArticleImage";
      }


      var pathParams = {
        'organizationId': organizationId,
        'newsArticleId': newsArticleId,
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
        '/organizations/{organizationId}/news/{newsArticleId}/images/{imageId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Returns an organization banner image data
     * Returns an organization banner image data 
     * @param {String} organizationId Organization id
     * @param {String} bannerId Banner id
     * @param {String} imageId Banner image id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.size Maximum width or height of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getOrganizationBannerImageData = function(organizationId, bannerId, imageId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling getOrganizationBannerImageData";
      }

      // verify the required parameter 'bannerId' is set
      if (bannerId == undefined || bannerId == null) {
        throw "Missing the required parameter 'bannerId' when calling getOrganizationBannerImageData";
      }

      // verify the required parameter 'imageId' is set
      if (imageId == undefined || imageId == null) {
        throw "Missing the required parameter 'imageId' when calling getOrganizationBannerImageData";
      }


      var pathParams = {
        'organizationId': organizationId,
        'bannerId': bannerId,
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
        '/organizations/{organizationId}/banners/{bannerId}/images/{imageId}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Returns a news article image data
     * Returns a news article image data 
     * @param {String} organizationId Organization id
     * @param {String} newsArticleId News article id
     * @param {String} imageId Event image id
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.size Maximum width or height of image
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getOrganizationNewsArticleImageData = function(organizationId, newsArticleId, imageId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling getOrganizationNewsArticleImageData";
      }

      // verify the required parameter 'newsArticleId' is set
      if (newsArticleId == undefined || newsArticleId == null) {
        throw "Missing the required parameter 'newsArticleId' when calling getOrganizationNewsArticleImageData";
      }

      // verify the required parameter 'imageId' is set
      if (imageId == undefined || imageId == null) {
        throw "Missing the required parameter 'imageId' when calling getOrganizationNewsArticleImageData";
      }


      var pathParams = {
        'organizationId': organizationId,
        'newsArticleId': newsArticleId,
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
        '/organizations/{organizationId}/news/{newsArticleId}/images/{imageId}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Lists organizations news
     * Lists organizations news 
     * @param {String} organizationId Organization id
     * @param {Object} opts Optional parameters
     * @param {String} opts.slug Filter with slug
     * @param {String} opts.publishedBefore return only news published before the date
     * @param {String} opts.publishedAfter return only news published after the date
     * @param {Integer} opts.firstResult first index of results
     * @param {Integer} opts.maxResults maximum number of results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NewsArticle>}
     */
    this.listOrganizationNews = function(organizationId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationNews";
      }


      var pathParams = {
        'organizationId': organizationId
      };
      var queryParams = {
        'slug': opts['slug'],
        'publishedBefore': opts['publishedBefore'],
        'publishedAfter': opts['publishedAfter'],
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
      var returnType = [NewsArticle];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/news', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Returns list of news article images
     * Returns list of news article images 
     * @param {String} organizationId Organization id
     * @param {String} newsArticleId News article id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Attachment>}
     */
    this.listOrganizationNewsArticleImages = function(organizationId, newsArticleId) {
      var postBody = null;

      // verify the required parameter 'organizationId' is set
      if (organizationId == undefined || organizationId == null) {
        throw "Missing the required parameter 'organizationId' when calling listOrganizationNewsArticleImages";
      }

      // verify the required parameter 'newsArticleId' is set
      if (newsArticleId == undefined || newsArticleId == null) {
        throw "Missing the required parameter 'newsArticleId' when calling listOrganizationNewsArticleImages";
      }


      var pathParams = {
        'organizationId': organizationId,
        'newsArticleId': newsArticleId
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
      var returnType = [Attachment];

      return this.apiClient.callApi(
        '/organizations/{organizationId}/news/{newsArticleId}/images', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
