import { Loading, PageSection, Typography } from "../presentational";

const Categories = ({ categories }) => {
  return (
    <PageSection>
      <Typography type="h2" textAlign="center" size="2rem" capitalize>
        Shop by Category
      </Typography>

      {categories ? (
        categories.map(category => <div key={category.id}>{category.name}</div>)
      ) : (
        <Loading center size="2x" height="4rem" />
      )}
    </PageSection>
  );
};

export default Categories;
