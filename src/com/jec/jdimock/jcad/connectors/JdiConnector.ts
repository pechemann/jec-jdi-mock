//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {Decorator, DecoratorConnector, AbstractDecoratorConnector} from "jec-commons";

/**
 * The <code>JdiConnector</code> class defines the 
 * <code>DecoratorConnector</code> implementation for the JDI decorators in the
 * Sokoke framework.
 */
export class JdiConnector extends AbstractDecoratorConnector {
  
  //////////////////////////////////////////////////////////////////////////////
  // Constructor function
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>JdiConnector</code> instance.
   * 
   * @param {string} jcadReference the JCAD reference associated with this
   *                               connector. Valid values are the members of
   *                               the <code>JdiConnectorRefs</code> enum.
   * @param {Decorator} decorator the decorator associated with the specified
   *                              JCAD reference.
   */
  constructor(jcadReference:string, decorator:Decorator) {
    super(jcadReference, decorator);
  }
}
