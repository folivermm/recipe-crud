import React, { useState } from "react";

function RecipeCreate({ onCreate }) {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>

            <td>
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </td>

            <td>
              <input
                placeholder="Cuisine"
                type="text"
                id="cuisine"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required
              />
            </td>
            {/* </tr> */}
            {/* <tr> */}
            {/* <td>
              <label htmlFor="photo">Photo URL:</label>
            </td> */}
            <td>
              <input
                placeholder="URL"
                type="text"
                id="photo"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                required
              />
            </td>

            <td>
              <textarea
                placeholder="Ingredients"
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
              ></textarea>
            </td>

            <td>
              <textarea
                placeholder="Preparation"
                id="preparation"
                name="preparation"
                value={formData.preparation}
                onChange={handleChange}
                required
              ></textarea>
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;