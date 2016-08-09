/**
 * Created by Jeroen on 09/08/16.
 */

import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'

import HelloWorld from '/imports/ui/components/hello_world'

Meteor.startup(function () {
    render(<HelloWorld />, document.getElementById('app'))
})
