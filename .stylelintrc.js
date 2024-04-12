const camelCase = '([a-z0-9]+([A-Z][a-z0-9]+)*)';

export default {
    extends: 'stylelint-config-standard',
    rules: {
        indentation: [4],

        'custom-property-empty-line-before': null,
        'selector-class-pattern': [camelCase],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['define-mixin', 'mixin'],
            },
        ],
        'color-named': 'never',
    },
};
