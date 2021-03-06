package fi.metatavu.kuntaapi.server.rest.model;

import java.time.OffsetDateTime;



import io.swagger.annotations.*;
import java.util.Objects;


public class Announcement   {
  
  private String id = null;
  private String slug = null;
  private String title = null;
  private String _abstract = null;
  private String contents = null;
  private OffsetDateTime published = null;

  /**
   **/
  public Announcement id(String id) {
    this.id = id;
    return this;
  }

  
  @ApiModelProperty(example = "null", value = "")
  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }

  /**
   **/
  public Announcement slug(String slug) {
    this.slug = slug;
    return this;
  }

  
  @ApiModelProperty(example = "null", value = "")
  public String getSlug() {
    return slug;
  }
  public void setSlug(String slug) {
    this.slug = slug;
  }

  /**
   **/
  public Announcement title(String title) {
    this.title = title;
    return this;
  }

  
  @ApiModelProperty(example = "null", value = "")
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }

  /**
   **/
  public Announcement _abstract(String _abstract) {
    this._abstract = _abstract;
    return this;
  }

  
  @ApiModelProperty(example = "null", value = "")
  public String getAbstract() {
    return _abstract;
  }
  public void setAbstract(String _abstract) {
    this._abstract = _abstract;
  }

  /**
   **/
  public Announcement contents(String contents) {
    this.contents = contents;
    return this;
  }

  
  @ApiModelProperty(example = "null", value = "")
  public String getContents() {
    return contents;
  }
  public void setContents(String contents) {
    this.contents = contents;
  }

  /**
   **/
  public Announcement published(OffsetDateTime published) {
    this.published = published;
    return this;
  }

  
  @ApiModelProperty(example = "null", value = "")
  public OffsetDateTime getPublished() {
    return published;
  }
  public void setPublished(OffsetDateTime published) {
    this.published = published;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Announcement announcement = (Announcement) o;
    return Objects.equals(id, announcement.id) &&
        Objects.equals(slug, announcement.slug) &&
        Objects.equals(title, announcement.title) &&
        Objects.equals(_abstract, announcement._abstract) &&
        Objects.equals(contents, announcement.contents) &&
        Objects.equals(published, announcement.published);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, slug, title, _abstract, contents, published);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Announcement {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    slug: ").append(toIndentedString(slug)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    _abstract: ").append(toIndentedString(_abstract)).append("\n");
    sb.append("    contents: ").append(toIndentedString(contents)).append("\n");
    sb.append("    published: ").append(toIndentedString(published)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
