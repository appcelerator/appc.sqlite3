module.exports = function (grunt) {
	// Project configuration.
  grunt.initConfig({
    mocha_istanbul: {
      coverage: {
        src: ['test', 'test/integration', 'test/unit'],
        options: {
          timeout: 30000,
          ignoreLeaks: false,
          check: {
            statements: 80,
            branches: 57.58,
            functions: 80,
            lines: 80
          }
        }
      }
    },
    clean: ['tmp']
  })

	// Load grunt plugins for modules.
  grunt.loadNpmTasks('grunt-mocha-istanbul')
  grunt.loadNpmTasks('grunt-contrib-clean')

	// Register tasks.
  grunt.registerTask('default', ['mocha_istanbul:coverage', 'clean'])
}
