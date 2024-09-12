import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <table>
        <tr>
          <td width={200}>
            <ul>
              <li><Link to="delhi">Delhi</Link></li>
              <li><Link to="gurugao">Gurugao</Link></li>
              <li><Link to="noida">Noida</Link></li>
            </ul>
          </td>
          <td>
          <Outlet/>
          </td>
        </tr>
      </table>
    </div>
  )
}
