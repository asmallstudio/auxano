import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import klaw from "klaw";
import path from "path";

import { createSlugFromTitleAndDate } from "./copy";

/**
 * Parses the information of a markdown file with front matter
 * in YAML
 * @param {string} path Path to file
 * @returns {Promise} Resolves to an object with the markdown file's
 * information
 */
const getSingleFileMd = path => {
  const getFiles = () =>
    new Promise(resolve => {
      if (fs.existsSync(path)) {
        const data = fs.readFileSync(path, "utf8");
        const dataObj = matter(data);
        if (dataObj.data.title) {
          dataObj.data.slug = dataObj.data.title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
        }
        delete dataObj.orig;
        resolve(dataObj);
      }
    });
  return getFiles();
};

/**
 * Parses the information of a YAML file
 * @param {string} path Path to file to be read
 * @returns {object} An object containing the YAML file's parsed information
 */
const getSingleFileYaml = path => yaml.safeLoad(fs.readFileSync(path, "utf8"));

const getFolderCollection = location => {
  return new Promise((resolve, reject) => {
    const items = [];
    if (fs.existsSync(location)) {
      klaw(location)
        .on("data", item => {
          // Filter function to retrieve .md files
          if (path.extname(item.path) === ".yml") {
            // If markdown file, read contents
            const data = getSingleFileYaml(item.path);
            // Create slug for URL
            data.slug = createSlugFromTitleAndDate(data.title, data.date);
            // Push object into items array
            items.push(data);
          }
        })
        .on("error", e => {
          reject(e);
        })
        .on("end", () => {
          // Resolve promise for async getRoutes request
          // posts = items for below routes
          resolve(items);
        });
    } else {
      // If src/posts directory doesn't exist, return items as empty array
      resolve(items);
    }
  });
};

export { getSingleFileMd, getSingleFileYaml, getFolderCollection };
