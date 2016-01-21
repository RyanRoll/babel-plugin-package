import PackageLoader from './loader';

export default function({ types: t }) {
  return {
    visitor: {
      ImportDeclaration(nodePath, state) {
        let packagePath = nodePath.node.source.value;
        let packagePathLength = packagePath.length - 1;
        // packagePath.endsWith('*')
        if ( packagePath.charAt(packagePathLength) === '*' ) {
          packagePath = packagePath.substr(0, packagePathLength);
          let loader = new PackageLoader(t, nodePath, state, packagePath);
          loader.load();
        }
      }
    }
  };
};
