import { useEffect, useState } from "react";
import styled from "styled-components";
import { Loading, Typography } from "../../presentational";
import commerce from "../../../lib/commerce";

const BrandFilter = props => {
  const { products, onChange } = props;

  const [brands, setBrands] = useState([]);
  const [activeBrands, setActiveBrands] = useState([]);

  const selectBrand = brand => {
    return e => {
      setActiveBrands(old =>
        e.target.checked ? [...old, brand] : old.filter(b => b.id !== brand.id)
      );
    };
  };

  useEffect(() => {
    const fetchBrands = async () => {
      const { data } = await commerce.categories.list();

      // Remove empty/non-brand categories & sort alphabetically
      let populatedCategories = products.map(p => p.categories).flat();
      const brands = data
        .filter(category => category.meta?.type === "brand")
        .filter(brand => populatedCategories.some(c => c.id === brand.id))
        .sort((a, b) => (a.name > b.name ? 1 : -1));

      setBrands(brands);
    };

    fetchBrands();
  }, [products]);

  useEffect(() => {
    const newList = [];

    for (let product of products) {
      const showProduct = activeBrands.some(brand => {
        return product.categories.map(p => p.id).includes(brand.id);
      });

      if (showProduct) newList.push(product);
    }

    onChange(activeBrands.length > 0 ? newList : products);
  }, [activeBrands, products, onChange]);

  return (
    <StyledBrandFilter {...props} onChange={undefined}>
      {brands.length > 0 ? (
        <>
          <Typography type="h4">Brands</Typography>
          {brands.map(brand => (
            <div key={brand.id} className="brand">
              <input
                type="checkbox"
                name={brand.id}
                id={brand.id}
                onChange={selectBrand(brand)}
              />
              <label htmlFor={brand.id}>{brand.name}</label>
            </div>
          ))}
        </>
      ) : (
        <Loading center />
      )}
    </StyledBrandFilter>
  );
};

const StyledBrandFilter = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: 1px solid ${({ theme }) => theme.colors.midGrey};
  padding: 1rem;

  input[type="checkbox"] {
    cursor: pointer;
    padding: 0.5rem;
  }

  label {
    cursor: pointer;
    padding-left: 0.75rem;
  }

  .brand {
    margin-bottom: 0.75rem;
    font-size: 1.1rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export default BrandFilter;
