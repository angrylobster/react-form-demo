import { FOOD_OPTIONS } from './constants';
import PropTypes from 'prop-types';

export function Form({
    handleFormChange,
    handleSubmit,
    name,
    age,
    gender,
    favoriteFood,
    description
}) {
    return (
        <div style={{ padding: '16px 32px' }}>
            <h3>My First Form</h3>

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        value={name}
                        id="name"
                        onChange={(e) => handleFormChange(e)}
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="age">Age</label>
                    <input name="age" value={age} id="age" onChange={(e) => handleFormChange(e)} />
                </div>

                <div className="form-item">
                    <label>Gender</label>
                    <input
                        name="gender"
                        value="male"
                        type="radio"
                        onChange={(e) => handleFormChange(e)}
                        checked={gender === 'male'}
                    />
                    Male
                    <input
                        name="gender"
                        value="female"
                        type="radio"
                        onChange={(e) => handleFormChange(e)}
                        checked={gender === 'female'}
                    />
                    Female
                </div>

                <div className="form-item">
                    <label>Favorite Food</label>
                    <select
                        onChange={(e) => handleFormChange(e)}
                        value={favoriteFood}
                        name="favoriteFood">
                        {FOOD_OPTIONS.map(({ name, value }, index) => (
                            <option key={index} name={name} value={value}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-item">
                    <label htmlFor="description">Description</label>

                    <textarea
                        rows={5}
                        name="description"
                        value={description}
                        style={{ width: '300px' }}
                        onChange={(e) => handleFormChange(e)}></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

Form.propTypes = {
    handleFormChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.string,
    gender: PropTypes.string,
    favoriteFood: PropTypes.string,
    description: PropTypes.string
};
